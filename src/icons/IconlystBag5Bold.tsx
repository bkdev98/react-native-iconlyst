import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag5Bold = ({
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
      d="M2.54 17.536a.04.04 0 0 0-.04.04c0 2.685 1.726 4.49 4.295 4.49h10.408c2.57 0 4.297-1.805 4.297-4.49a.04.04 0 0 0-.04-.04zM2.5 15.837c0 .11.09.2.2.2h18.6a.2.2 0 0 0 .2-.2v-2.951a.2.2 0 0 0-.2-.2H2.7a.2.2 0 0 0-.2.2zM9.391 6.646c0-.811.66-1.47 1.47-1.47h2.28c.81 0 1.47.659 1.47 1.47a.14.14 0 0 1-.14.14H9.53a.14.14 0 0 1-.14-.14m11.898 4.54a.195.195 0 0 0 .197-.203c-.122-2.521-1.809-4.197-4.282-4.197h-.954a.14.14 0 0 1-.14-.14 2.973 2.973 0 0 0-2.969-2.97h-2.28a2.973 2.973 0 0 0-2.97 2.97.14.14 0 0 1-.14.14h-.956c-2.473 0-4.159 1.676-4.281 4.197a.195.195 0 0 0 .196.203z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag5Bold;
