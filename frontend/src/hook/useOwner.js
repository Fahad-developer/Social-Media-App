import { useSelector } from 'react-redux';

export const useOwner = () => {
    const company = useSelector((state) => state.viewCompany.company);
    const currentUser = useSelector((state) => state.login.user);

    const companyId = company?.owner;
    const currentUserId = currentUser?._id;
    
    return companyId === currentUserId;
};
