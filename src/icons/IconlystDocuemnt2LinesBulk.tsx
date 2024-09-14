import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocuemnt2LinesBulk = ({
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
      d="M19.853 9.094H16.89c-1.767-.009-3.226-1.472-3.226-3.256v-3.14a.445.445 0 0 0-.444-.448H8.067c-2.403 0-4.353 1.979-4.353 4.397v10.511c0 2.535 2.046 4.592 4.556 4.592h7.675c2.402 0 4.344-1.96 4.344-4.378V9.533a.435.435 0 0 0-.436-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.006 16.103H8.71a.75.75 0 0 1 0-1.5h5.295a.75.75 0 0 1 0 1.5m-5.297-5.181h3.29a.75.75 0 0 1 0 1.5H8.71a.75.75 0 0 1 0-1.5M17.018 7.67c.673.007 1.608.01 2.402.007a.465.465 0 0 0 .33-.787l-1.93-2.028-1.956-2.054c-.288-.304-.793-.095-.793.325v2.57c0 1.08.879 1.967 1.947 1.967"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocuemnt2LinesBulk;
