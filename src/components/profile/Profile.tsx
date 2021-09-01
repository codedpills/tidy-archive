import "./profile.scss";

type ProfileProps = {
  user: {
    name: string;
    company: string;
    imageUrl: string;
  };
};

const Profile = ({ user }: ProfileProps) => {
  return (
    <div className="profile">
      <div className="profile__photo">
        <img src={user.imageUrl} alt={user.name} />
      </div>
      <div className="profile__info">
        <h6 className="name">{user.name}</h6>
        <p className="company">{user.company}</p>
      </div>
    </div>
  );
};

export default Profile;
