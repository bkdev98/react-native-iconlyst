import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBentArrowUpLeftOutline = ({
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
      d="M12.52 4.47a.75.75 0 0 0-1.04 0c-.986.948-1.954 1.922-2.914 2.889l-1.096 1.1A.75.75 0 0 0 8.53 9.52q.559-.559 1.112-1.116.803-.81 1.608-1.611v9.197A2.25 2.25 0 0 1 9 18.24H8a.75.75 0 0 0 0 1.5h1a3.75 3.75 0 0 0 3.75-3.75V6.793q.805.8 1.608 1.611.554.557 1.112 1.116a.75.75 0 1 0 1.06-1.06l-1.096-1.101c-.96-.967-1.928-1.941-2.914-2.89"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBentArrowUpLeftOutline;
