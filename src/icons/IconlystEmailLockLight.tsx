import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLockLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.964V9.283c0-2.763-1.845-5.013-4.582-5.013H7.582C4.845 4.27 3 6.52 3 9.283v6.18c0 2.766 1.845 5.014 4.582 5.007h4.336"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.603 20.974h-2.816a1.4 1.4 0 0 1-1.398-1.398v-1.58c0-.772.626-1.398 1.398-1.398h2.816c.77 0 1.398.626 1.398 1.398v1.58c0 .772-.627 1.398-1.398 1.398"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.878 16.626v-1.04a1.682 1.682 0 0 0-3.362-.008v1.048M17.313 9.531l-3.999 3.252a2.07 2.07 0 0 1-2.574 0L6.707 9.531"
    />
  </Svg>
);
export default IconlystEmailLockLight;
