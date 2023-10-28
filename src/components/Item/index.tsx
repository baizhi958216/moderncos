import Avatar from '../Avatar';

type InfoProps = {
  avatar: string;
  name: string;
  email: string;
  archived?: boolean;
};

const Item = ({ info }: { info: InfoProps }) => {
  const { avatar, name, email, archived } = info;
  return (
    <div className="ml-4 mb-2 pb-2 border-b-2 flex-1 flex justify-between">
      <Avatar src={avatar} />
      <div className="ml-4 flex-1 flex justify-between">
        <div className="flex-1">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <button
          type="button"
          disabled={archived}
          className={`bg-blue-500  text-white font-bold
            py-2 px-4 rounded-full hover:bg-blue-700`}
        >
          Archive
        </button>
      </div>
    </div>
  );
};

export default Item;
