import * as React from "react";
import * as _ from "styled-components/cssprop";
import { RouteComponentProps } from "react-router-dom";
import { generateNameList } from "../../common/utils/generator";

interface routerProps extends RouteComponentProps {}

const Top: React.FC = () => {
  const [result, setResult] = React.useState<Array<string>>([]);

  return (
    <div css={{ margin: "0 auto", width: "500px" }}>
      <h1 css={{ textAlign: "center" }}>
        プロジェクト名・リポジトリ名 Generator
      </h1>
      <div
        css={{
          border: "solid 1px #f0f0f0",
          height: "300px"
        }}
      >
        {result && <div css={{ wordWrap: "break-word" }}>{result}</div>}
      </div>
      <button
        type="button"
        css={{
          background: "#055ec1",
          border: "none",
          borderRadius: "4px",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px",
          height: "50px",
          letterSpacing: "0",
          marginBottom: "18px",
          marginTop: "20px",
          padding: "12px 20px",
          textDecoration: "none",
          width: "100%"
        }}
        onClick={() => {
          setResult(generateNameList);
        }}
      >
        名前候補の生成
      </button>
    </div>
  );
};

export default Top;

export const TopContainer: React.FC<routerProps> = () => {
  return (
    <div>
      <Top />
    </div>
  );
};
