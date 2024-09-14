import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentMenuBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.506 14.88H8.414v.597c0 .378.113 1.256 1.158 1.256h.934zM10.506 13.38v-1.852h-.934c-.725 0-1.158.469-1.158 1.256v.597zM17.016 7.672c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966M12.006 13.38h2.091v-.596c0-.787-.433-1.256-1.158-1.256h-.933zM12.006 14.88v1.853h.933c1.045 0 1.158-.878 1.158-1.256v-.596z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.597 15.477c0 1.623-1.093 2.756-2.658 2.756H9.573c-1.566 0-2.659-1.133-2.659-2.756v-2.693c0-1.623 1.093-2.756 2.659-2.756h3.366c1.565 0 2.658 1.133 2.658 2.756zm4.253-6.382h-2.962c-1.766-.01-3.223-1.471-3.223-3.255V2.702a.445.445 0 0 0-.444-.448H8.068c-2.403 0-4.352 1.978-4.352 4.395v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.403 0 4.342-1.958 4.342-4.375V9.534a.435.435 0 0 0-.434-.44"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentMenuBold;
