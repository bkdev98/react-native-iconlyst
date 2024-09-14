import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourDeliveryOutline = ({
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
      d="M16.878 5.722A8.26 8.26 0 0 0 5.472 7.341C2.688 10.94 3.35 16.125 6.95 18.91a8.245 8.245 0 0 0 11.569-1.479 8.24 8.24 0 0 0 1.34-7.56.75.75 0 0 1 1.43-.455 9.74 9.74 0 0 1-1.584 8.933c-3.29 4.255-9.409 5.045-13.673 1.747C1.778 16.807.994 10.68 4.285 6.423m0 0c3.244-4.194 9.222-5.02 13.478-1.912a.75.75 0 0 1-.885 1.211"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.281 1.914a.75.75 0 0 1 .97.43l.938 2.425a.75.75 0 0 1-.43.97l-2.412.933a.75.75 0 1 1-.541-1.4l1.713-.662-.667-1.726a.75.75 0 0 1 .43-.97M15.67 8.84c.31.1.52.39.52.715v3.622h.342a.75.75 0 1 1 0 1.5h-.343v.54a.75.75 0 0 1-1.5 0v-.54h-2.394a.75.75 0 0 1-.609-1.188l3.144-4.372a.75.75 0 0 1 .84-.276m-1.912 4.337h.931v-1.295zM8.977 10.324a.757.757 0 0 0-.756.757.75.75 0 0 1-1.5 0 2.257 2.257 0 0 1 4.514 0c0 .705-.294 1.234-.675 1.638-.318.338-.726.614-1.057.84l-.102.068c-.435.297-.754.54-.95.818h2.034a.75.75 0 0 1 0 1.5H7.472a.75.75 0 0 1-.75-.75c0-1.547 1.1-2.306 1.834-2.807l.076-.052c.367-.25.637-.434.837-.646.184-.195.266-.372.266-.609a.76.76 0 0 0-.758-.757"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst24HourDeliveryOutline;
