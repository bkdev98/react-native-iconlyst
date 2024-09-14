import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBentArrowUpRightOutline = ({
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
      d="M11.48 4.47a.75.75 0 0 1 1.04 0c.986.948 1.954 1.922 2.914 2.889L16.53 8.46a.75.75 0 0 1-1.06 1.06q-.559-.558-1.112-1.116-.802-.81-1.608-1.611v9.197A2.25 2.25 0 0 0 15 18.24h1a.75.75 0 0 1 0 1.5h-1a3.75 3.75 0 0 1-3.75-3.75V6.793q-.806.8-1.608 1.611-.554.558-1.112 1.117A.75.75 0 0 1 7.47 8.46l1.096-1.101c.96-.967 1.928-1.941 2.914-2.89"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBentArrowUpRightOutline;
