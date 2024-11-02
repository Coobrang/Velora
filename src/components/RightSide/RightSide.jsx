import React from "react";
import "./RightSide.css";
import rightData from "../../Data/RightSide.json";

const RightSide = () => {
  return (
    <div className="rightside">
      <div className="box-container">
        {rightData.items.map((item, index) => (
          <a href={item.link} key={index}>
            <div className={`box ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="image">
                <img src={require(`../../assets/${item.image}`)} alt={item.title} />
              </div>
              <div className="content">
                <span>{item.category}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="footer">
        <h2 dangerouslySetInnerHTML={{__html: rightData.footer.title}} />
        <p dangerouslySetInnerHTML={{ __html: rightData.footer.description }} />
        <a href={rightData.footer.link}>
          <i className={rightData.footer.iconClass}></i>
        </a>
      </div>
    </div>
  );
};

export default RightSide;