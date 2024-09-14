import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNintendoBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.66 9.629c-.57 0-1.04-.46-1.04-1.04 0-.56.47-1.03 1.04-1.03a1.035 1.035 0 0 1 0 2.07m3.82-6.62h-2.7c-3.16 0-5.28 2.23-5.28 5.53v7.95c0 3.31 2.12 5.52 5.28 5.52h2.7c.28 0 .5-.22.5-.5v-18c0-.27-.22-.5-.5-.5M17.34 17.489c-.57 0-1.03-.46-1.03-1.03s.46-1.04 1.03-1.04 1.04.47 1.04 1.04-.47 1.03-1.04 1.03m-1.12-14.48h-2.7c-.28 0-.5.23-.5.5v18c0 .28.22.5.5.5h2.7c3.16 0 5.28-2.22 5.28-5.53v-7.95c0-3.3-2.12-5.52-5.28-5.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNintendoBold;
