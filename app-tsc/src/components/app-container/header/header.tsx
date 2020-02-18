import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import {
  CategoriesEnum,
  Category,
  CategoriesList
} from "../../../domain/category-types";
import { History, Location } from "history";
import { withRouter, match } from "react-router-dom";

interface Props {
  history: History;
  location: Location;
  match: match;
}

const Header = (props: Props) => {
  const [categoryType, setCategoryType] = useState<Category | undefined>();

  useEffect(() => {
    const pathSplit = props.location.pathname.split("/");
    const lastUrlPiece = pathSplit[pathSplit.length - 1];
    const categoryMatch = CategoriesList.find(cat => cat === lastUrlPiece);
    setCategoryType(categoryMatch);
  }, [true]);

  const onSelect = (category: Category) => {
    setCategoryType(category);
  };

  const emptySelect = () => {
    setCategoryType(undefined);
  };

  return (
    <div>
      <header className="header">
        <div className="header-buttons-left">
          <Link
            className="icon icon-home"
            to="/home"
            onClick={emptySelect}
          ></Link>
        </div>


        <div className="header-buttons">
          {/* put home button in bar when on mobile */}
          <button type="button" 
            className="header-button-home header-button">
            <Link
              className="icon icon-home"
              to="/home"
              onClick={emptySelect}
            ></Link>
          </button>

          <button
            type="button"
            className={
              "header-button red" +
              (categoryType === CategoriesEnum.BOOKS ? " selected" : "")
            }
            onClick={() => {
              onSelect(CategoriesEnum.BOOKS);
            }}
          >
            <Link
              className="icon icon-Books"
              to={`/articles/category/${CategoriesEnum.BOOKS}`}
            ></Link>
          </button>
          <button
            type="button"
            className={
              "header-button red " +
              (categoryType === CategoriesEnum.KIMONO ? " selected" : "")
            }
            onClick={() => {
              onSelect(CategoriesEnum.KIMONO);
            }}
          >
            <Link
              className="icon  icon-Kimono"
              to={`/articles/category/${CategoriesEnum.KIMONO}`}
            ></Link>
          </button>
          <button
            type="button"
            className={
              "header-button red " +
              (categoryType === CategoriesEnum.JAPAN ? " selected" : "")
            }
            onClick={() => {
              onSelect(CategoriesEnum.JAPAN);
            }}
          >
            <Link
              className="icon  icon-Japan"
              to={`/articles/category/${CategoriesEnum.JAPAN}`}
            >
              {" "}
            </Link>
          </button>
          <button
            type="button"
            className={
              "header-button red " +
              (categoryType === CategoriesEnum.JOB ? " selected" : "")
            }
            onClick={() => {
              onSelect(CategoriesEnum.JOB);
            }}
          >
            <Link
              className="icon  icon-Job"
              to={`/articles/category/${CategoriesEnum.JOB}`}
            ></Link>
          </button>
        </div>
      </header>
    </div>
  );
};

export default withRouter(Header);
