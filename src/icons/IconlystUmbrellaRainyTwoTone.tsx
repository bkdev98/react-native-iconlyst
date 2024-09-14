import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaRainyTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.448 11.298q.19.875.192 1.805c-1.728.032-2.606.233-3.892 1.175-3.666-1.396-5.615-1.421-9.277 0-1.196-.838-2.09-1.094-3.883-1.175A8.526 8.526 0 0 1 13.73 4.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.115 13.238v6.099a1.664 1.664 0 1 1-3.328 0v-.308"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.114 3v1.577"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.364 3.233s1.994 1.515 1.964 3.478v.002c.02 1.117-.992 1.931-1.964 1.918-.973.013-1.985-.8-1.965-1.918v-.002c-.03-1.963 1.965-3.478 1.965-3.478M12.684 6.993s1.47 1.025 1.447 2.471v.002c.016.823-.73 1.422-1.447 1.413-.717.01-1.462-.59-1.447-1.413v-.002c-.022-1.446 1.447-2.471 1.447-2.471"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUmbrellaRainyTwoTone;
