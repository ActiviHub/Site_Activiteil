import employeesDatas from "../../Datas/employeesDatas";
import { BadgeActivityStyle } from "../BadgeActivity.style";

const Employees = () => {
  return (
    <>
      <div className="col m-md-1">
        <h3 className="pt-md-3 text-start">
          <strong>
            <u>Les salariés d'Activiteil</u>
          </strong>
        </h3>
        <div className="mt-5 col-12">
          {employeesDatas.map((employee) => (
            <BadgeActivityStyle
              backgroundColor="bg-info"
              key={employee}
              name={employee}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Employees;
