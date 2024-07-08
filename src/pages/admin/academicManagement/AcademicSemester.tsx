import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/AcademicSemester.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);

  console.log(data);

  return (
    <div className="AcademicSemesterContainer">
      <h1> AcademicSemester</h1>
    </div>
  );
};

export default AcademicSemester;
