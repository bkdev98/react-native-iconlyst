import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacLaptopNotebookBold = ({
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
      d="M19.962 6.422a2.94 2.94 0 0 0-2.936-2.936H6.979a2.94 2.94 0 0 0-2.936 2.936v6.721h15.919zM13.311 18.003h-2.616a.75.75 0 0 1 0-1.5h2.616a.75.75 0 0 1 0 1.5m8.031-.682-1.23-2.677H3.893l-1.247 2.715a2.35 2.35 0 0 0 2.205 3.155h14.302a2.35 2.35 0 0 0 1.924-1.003 2.36 2.36 0 0 0 .265-2.19"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacLaptopNotebookBold;
