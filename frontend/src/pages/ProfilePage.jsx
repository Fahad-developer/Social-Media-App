import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import ProfileActions from "../components/ProfileActions";
import ProfileContent from "../components/ProfileContent";

import Navbar from '../components/Navbar'


export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pb-10">
        <ProfileHeader />
        <ProfileStats />
        <ProfileActions />
        <ProfileContent />

      </div>
    </>
  );
}
