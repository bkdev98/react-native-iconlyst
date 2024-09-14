import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSleepingBold = ({
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
      d="M20.625 9.195h-.902l1.458-1.607a.752.752 0 0 0-.556-1.254H18.03a.75.75 0 0 0 0 1.5h.903l-1.458 1.607a.75.75 0 0 0 .555 1.254h2.595a.75.75 0 0 0 0-1.5M14.647 4.453h.17l-.726.8a.75.75 0 0 0 .556 1.253h1.861a.75.75 0 0 0 0-1.5h-.169l.725-.799a.752.752 0 0 0-.556-1.254h-1.86a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.13 14.06c-.5 0-.907.407-.907.907v.705a.908.908 0 0 0 1.814 0v-.705c0-.5-.407-.907-.907-.907"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.202 10.756a2 2 0 0 0 1.828 1.19h1.307c.162 0 .295.129.297.29q.002.153.002.305c0 4.656-3.85 8.506-8.505 8.506s-8.506-3.85-8.506-8.506c0-4.655 3.85-8.505 8.506-8.505.483 0 .944.046 1.395.123a.32.32 0 0 1 .243.217q.034.1.078.195c.047.1.047.217-.001.317a2 2 0 0 0 1.802 2.868h1.296c.126 0 .238.08.292.195q.122.26.31.473c.046.05.048.127.003.178a2 2 0 0 0-.347 2.154m-9.277-.348a.749.749 0 1 1 1.189-.913c.068.087.213.235.432.235.22 0 .366-.148.434-.235a.75.75 0 0 1 1.189.913c-.4.522-.992.822-1.623.822-.63 0-1.221-.3-1.621-.822m8.412 0c-.4.522-.992.822-1.623.822-.63 0-1.221-.3-1.621-.822a.749.749 0 1 1 1.189-.913c.068.087.213.235.432.235.22 0 .366-.148.434-.235a.75.75 0 0 1 1.189.913m-1.8 5.265a2.41 2.41 0 0 1-2.407 2.407 2.41 2.41 0 0 1-2.407-2.407v-.705a2.41 2.41 0 0 1 2.407-2.407 2.41 2.41 0 0 1 2.407 2.407z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSleepingBold;
