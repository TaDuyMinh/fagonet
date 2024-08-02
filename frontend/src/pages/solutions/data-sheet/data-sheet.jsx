import { useTranslation } from 'react-i18next';
function DownLoadDataSheet({ filePath, fileName }) {
  const { t } = useTranslation();
  const handleDownload = async () => {
    try {
      const res = await fetch(filePath);
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
      } else {
        throw new Error('Failed to fetch the PDF file.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='w-4/5 m-auto flex justify-center items-center my-16 Scale'>
      <button className='btn-data-sheet font-bold' onClick={handleDownload}>
        {t('download')}
      </button>
    </section>
  );
}

export default DownLoadDataSheet;
