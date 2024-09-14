import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoument3LinesBulk = ({
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
      d="M19.854 9.094H16.89c-1.767-.009-3.225-1.472-3.225-3.256v-3.14a.445.445 0 0 0-.443-.448H8.066c-2.404 0-4.354 1.979-4.354 4.397v10.511c0 2.535 2.047 4.592 4.557 4.592h7.675c2.403 0 4.344-1.96 4.344-4.378V9.533a.435.435 0 0 0-.434-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.86 13.81H8.132a.75.75 0 0 1 0-1.5h6.728a.75.75 0 0 1 0 1.5m-2.27 3.422H8.133a.75.75 0 0 1 0-1.5h4.459a.75.75 0 1 1 0 1.5M8.133 8.89h2.943a.75.75 0 0 1 0 1.5H8.132a.75.75 0 0 1 0-1.5M17.018 7.67c.673.007 1.608.01 2.402.007a.465.465 0 0 0 .331-.787l-1.93-2.028c-.716-.75-1.434-1.506-1.957-2.054-.288-.304-.793-.095-.793.325v2.57c0 1.08.88 1.967 1.947 1.967"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoument3LinesBulk;
