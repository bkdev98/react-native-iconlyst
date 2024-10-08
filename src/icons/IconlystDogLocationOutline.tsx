import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogLocationOutline = ({
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
      d="M10.225 8.32c-.41 0-.75-.34-.75-.75s.34-.76.75-.76.75.33.75.75-.34.76-.75.76"
    />
    <Path
      fill={props.color}
      d="M11.515 21.58c-1.34 0-2.32-.25-2.69-.36a.74.74 0 0 1-.48-.45.77.77 0 0 1 .06-.66c1.21-1.99 1.54-4.43 1.27-6.05-.55.08-1.44.2-2.95.37-1.03.12-1.98-.16-2.72-.81-1.66-1.44-1.8-4.12-1.82-4.64 0-.31.17-.59.46-.71l3.79-1.61c.01-.72.23-1.61.82-2.35.46-.58 1.34-1.29 2.92-1.39l2.13-.17c3.26-.29 5.81 1.77 6.82 5.47.14.52.26 1.03.35 1.54.07.41-.2.8-.61.87a.75.75 0 0 1-.87-.61c-.08-.46-.19-.93-.32-1.4-1.12-4.1-3.77-4.5-5.25-4.37l-2.15.17c-.84.06-1.46.34-1.86.83-.5.62-.53 1.44-.47 1.78a.76.76 0 0 1-.45.81l-3.79 1.61c.12 1.13.52 2.4 1.27 3.05.43.37.94.52 1.57.45.73-.08 2.93-.33 3.33-.44a.75.75 0 0 1 1.06.43c.55 1.7.43 4.54-.76 7.05.44.07 1.01.12 1.66.1h.03c.4 0 .74.32.75.72.01.41-.31.76-.72.77h-.38"
    />
    <Path
      fill={props.color}
      d="M13.375 13.17c-.4 0-.73-.32-.75-.72-.06-1.51.15-2.95.29-3.67a.75.75 0 0 1 .88-.6c.41.08.67.47.6.88-.12.66-.32 1.97-.27 3.33.02.41-.3.76-.72.78zM17.755 21.88c-1.05 0-4.06-2.73-4.06-5.36 0-2.24 1.82-4.06 4.06-4.06s4.06 1.82 4.06 4.06c0 2.63-3.02 5.36-4.06 5.36m0-7.92c-1.41 0-2.56 1.15-2.56 2.56 0 1.7 1.88 3.46 2.56 3.82.68-.36 2.56-2.12 2.56-3.82 0-1.41-1.15-2.56-2.56-2.56"
    />
    <Path
      fill={props.color}
      d="M17.765 17.12c-.54 0-.97-.44-.97-.98 0-.26.1-.5.28-.69s.43-.29.69-.29c.54 0 .98.44.98.98s-.44.98-.98.98"
    />
  </Svg>
);
export default IconlystDogLocationOutline;
