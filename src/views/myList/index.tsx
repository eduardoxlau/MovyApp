/* eslint-disable no-alert */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import Modal from 'components/modal';
import { List } from 'views/trailer';
import Loading from 'components/loading';
import Edit from 'assets/icons/edit.png';
import Close from 'assets/icons/remove.png';
import { GET_LISTS } from 'graphql/queries';
import { REMOVE_LIST } from 'graphql/mutations';
import Card, { ItemInterface } from 'components/card';

const MyList = () => {
  const [infoModal, setInfoModal] = useState<{
    show: boolean;
    list: List | null;
    isEdit: boolean;
  }>({
    show: false,
    list: null,
    isEdit: false,
  });

  const { data, loading } = useQuery(GET_LISTS);

  const [removeList, { loading: loadingRemove }] = useMutation(REMOVE_LIST, {
    errorPolicy: 'all',
  });

  if (loading || loadingRemove) return <Loading />;

  const lists: List[] = data.getLists;

  return (
    <div className="bg-black flex flex-col flex-grow">
      <div className="container mx-auto mt-20">
        {lists.map((list) => (
          <div className="text-white mt-11" key={list.id}>
            <div className="text-3xl flex items-center">
              <div>{list.name}</div>
              <img
                className="w-6 ml-4 cursor-pointer"
                src={Edit}
                data-testid="edit-list"
                alt=""
                onClick={() => setInfoModal({ show: true, list, isEdit: true })}
              />
              <img
                className="w-6 ml-4 cursor-pointer"
                src={Close}
                alt=""
                onClick={() => {
                  const remove = window.confirm(
                    'Are you sure removing this List'
                  );
                  if (remove) {
                    removeList({
                      refetchQueries: [{ query: GET_LISTS }],
                      variables: { id: list.id },
                    });
                  }
                }}
              />
            </div>
            <div className="flex my-7 w-full overflow-scroll items-center container-card">
              {list.movies.map((item: ItemInterface, index: number) => (
                <div className="mx-1 cursor-pointer" key={item.id}>
                  <Link to={`/trailer/${item.id}`}>
                    <Card item={item} scale index={index} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {infoModal.show && (
        <Modal
          show={infoModal.show}
          edit={infoModal.isEdit}
          list={infoModal.list}
          onClose={() => {
            setInfoModal({ show: false, list: null, isEdit: false });
          }}
        />
      )}
    </div>
  );
};

export default MyList;
