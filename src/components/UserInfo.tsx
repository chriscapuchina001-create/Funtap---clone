const UserInfo = ({ user }) => {
  return (
    <>
      <div className="w-12.5 h-12.5 flex justify-center items-center bg-linear-to-r bg-[#67AD3F] rounded-full text-white">
        {user?.loginType === "email" ? (
          <p className="text-[16.66px] font-poppins font-medium">G</p>
        ) : (
          <p className="text-[16.66px] font-poppins font-medium">F</p>
        )}
      </div>
      <div className="flex flex-col">
        <h2 className="text-white text-xl md:text-[22.5px] font-roboto font-semibold">
          {user?.username}
        </h2>
        <p className="text-white text-base md:text-lg font-roboto font-normal">
          ID: <span>{user?.id}</span>
        </p>
      </div>
    </>
  );
};

export default UserInfo;
