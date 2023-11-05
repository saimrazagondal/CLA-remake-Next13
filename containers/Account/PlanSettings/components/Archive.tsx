import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import confirmDialog from '@/components/ConfirmDialog';
import {
  ArchiveContentContainer,
  SubSectionHeading,
} from '../../styles/planSettings.styles';
import { message } from 'antd';
import { PLAN_SETTINGS } from '../constants';
// import axios, { baseUrl } from '../../../utils/axios';

const Archive: React.FC = () => {
  const router = useRouter();

  const archiveAccount = async () => {
    try {
      // await axios.put(`${baseUrl}/sales/tenant`, {
      //   archive_account: true,
      //   tenant_id,
      // });
      message.success('Success');
      router.push('/customers');
    } catch (err) {
      console.log(err);
      message.error('Something went wrong');
    }
  };

  return (
    <>
      <ArchiveContentContainer>
        <SubSectionHeading $mr='1rem'>Archive Account</SubSectionHeading>
        <Button
          variant='archive'
          onClick={() =>
            confirmDialog(PLAN_SETTINGS.CONFIRMATION.ARCHIVE, archiveAccount)
          }
        />
      </ArchiveContentContainer>
    </>
  );
};

export default Archive;
