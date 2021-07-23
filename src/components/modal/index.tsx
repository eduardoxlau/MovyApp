import { useMutation } from '@apollo/client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { List } from 'views/trailer';
import Input from 'components/input';
import { GET_LISTS } from 'graphql/queries';
import Close from 'assets/icons/close_window.png';
import { CREATE_LIST, EDIT_LIST } from 'graphql/mutations';

type ModalProps = {
  list?: List | null;
  show?: boolean;
  edit?: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmitData?: (list: List) => void;
  onClose?: () => void;
};

const Modal = ({
  show,
  onSubmitData = () => {},
  onClose = () => {},
  edit,
  list,
}: ModalProps) => {
  const [formData, updateFormData] = useState(
    edit
      ? { id: list?.id, name: list?.name, description: list?.description }
      : {}
  );
  const [isOpen, openModal] = useState(show);

  const [setList, { data, loading }] = useMutation(
    edit ? EDIT_LIST : CREATE_LIST,
    {
      errorPolicy: 'all',
    }
  );
  const closeModal = () => {
    openModal(false);
    onClose();
  };

  useEffect(() => {
    if (data) {
      const { createList } = data;
      onSubmitData(createList);
      closeModal();
    }
  }, [data]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setList({
      refetchQueries: [{ query: GET_LISTS }],
      variables: { input: formData },
    });
  };

  return (
    <div
      className={`w-full h-screen flex items-center ${
        isOpen ? 'fixed' : 'hidden'
      }`}
    >
      <div className="z-30 bg-black w-full md:w-1/2  min-h-80 m-auto text-white p-10 relative">
        <img
          className="w-8 absolute top-2 right-2 cursor-pointer"
          src={Close}
          alt=""
          onClick={() => closeModal()}
        />
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="text-3xl text-center">
            {edit ? 'Edit ' : 'Create '} List
          </div>
          <div>
            <div>Name:</div>
            <Input
              onChange={handleChange}
              name="name"
              value={formData?.name}
              required
            />
          </div>
          <div>
            <div>Description:</div>
            <Input
              onChange={handleChange}
              value={formData?.description}
              name="description"
              required
            />
          </div>
          <div className="flex items-center mt-2">
            <div>Is public?</div>
            <input
              className="ml-5 w-8 h-8 order-1 md:order-none"
              type="checkbox"
              name="isKid"
            />
          </div>
          <div className="mt-5">
            <input
              disabled={loading}
              type="submit"
              className={`w-full h-11 text-center rounded cursor-pointer ${
                loading ? 'bg-blue-300' : 'bg-button'
              }`}
              value="Save"
            />
          </div>
        </form>
      </div>
      <div className="z-20 absolute opacity-60 bg-black w-full h-full" />
    </div>
  );
};

Modal.defaultProps = {
  list: null,
  onClose: () => {},
  onSubmitData: () => {},
  show: true,
  edit: false,
};
export default Modal;
