import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLockLight = ({
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
      d="M3.573 12.826c1.206-.502 3.586-1.523 4.811-2.033L6.137 5.347c.609-.217 1.165-.469 1.75-.609.681-.162 1.268.146 1.77.586 1.151 1.008 2.3 2.019 3.424 3.055.285.263.51.287.85.137.977-.432 1.959-.86 2.963-1.224 1.162-.419 2.816-.463 3.226 1.003.324 1.155-.671 2.14-1.652 2.553a594 594 0 0 1-9.784 4.047c-2.334.936-4.18.12-5.17-2.202-.088-.208-.427-1.032-.514-1.241M4.865 19.988h7.275"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.798 20.554h-2.423a1.2 1.2 0 0 1-1.203-1.202v-1.36c0-.665.538-1.204 1.203-1.204h2.423c.665 0 1.203.54 1.203 1.204v1.36c0 .664-.538 1.202-1.203 1.202"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.033 16.812v-.895a1.447 1.447 0 0 0-2.892-.006v.9"
    />
  </Svg>
);
export default IconlystPlaneLockLight;
