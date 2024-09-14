import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandiCameraOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.469 7.619c.756-.812 1.83-1.26 3.08-1.26h6.111c1.254 0 2.327.448 3.083 1.26.75.806 1.133 1.91 1.133 3.132v5.113c0 1.222-.383 2.327-1.133 3.133-.757.812-1.83 1.26-3.084 1.26H6.55c-1.254 0-2.327-.448-3.083-1.26-.75-.807-1.132-1.911-1.132-3.133v-5.113c0-1.222.384-2.326 1.135-3.132m1.097 1.023c-.449.481-.732 1.198-.732 2.11v5.112c0 .913.282 1.63.73 2.11.442.476 1.102.782 1.985.782h6.11c.883 0 1.543-.306 1.986-.782.449-.481.731-1.198.731-2.11v-5.113c0-.912-.282-1.628-.73-2.11-.444-.475-1.103-.782-1.986-.782H6.55c-.88 0-1.539.307-1.983.783"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.951 11.215a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.658 7.857a.75.75 0 0 1-.68-.435l-.6-1.289a1.54 1.54 0 0 0-1.395-.89H7.074a.75.75 0 0 1 0-1.5h2.91a3.05 3.05 0 0 1 2.755 1.76l.6 1.29a.75.75 0 0 1-.68 1.064M19.92 18.313h-.006c-.44 0-.867-.154-1.209-.433l-3.052-2.509a.75.75 0 1 1 .95-1.159l3.053 2.508c.074.06.166.093.26.093a.41.41 0 0 0 .415-.412l.01-6.84a.41.41 0 0 0-.673-.318l-3.066 2.509a.75.75 0 1 1-.95-1.161l3.066-2.509a1.911 1.911 0 0 1 3.122 1.483l-.01 6.84a1.91 1.91 0 0 1-1.91 1.908"
    />
  </Svg>
);
export default IconlystHandiCameraOutline;
