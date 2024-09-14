import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoardDocumentBulk = ({
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
      d="M16.217 2.5h-7.38a.2.2 0 0 0-.2.2v18.6c0 .11.09.2.2.2h7.38c3.16 0 5.283-2.221 5.283-5.527V8.026c0-3.306-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.137 2.779a.195.195 0 0 0-.22-.195C4.247 2.958 2.5 5.037 2.5 8.025v7.948c0 2.989 1.748 5.067 4.416 5.441a.195.195 0 0 0 .22-.195zM15.991 8.406h-4.015a.75.75 0 0 1 0-1.5h4.015a.75.75 0 0 1 0 1.5m0 4.345h-4.015a.75.75 0 0 1 0-1.5h4.015a.75.75 0 0 1 0 1.5m0 4.344h-4.015a.75.75 0 1 1 0-1.5h4.015a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBoardDocumentBulk;
