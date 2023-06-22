import styled from "styled-components";
import px2rem from "@/utils/px2rem";

export const PaytypeListStyled = styled.div`
  .package-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: ${px2rem(24)};
    
    > div {
      flex: 1;
    }
  }
`;