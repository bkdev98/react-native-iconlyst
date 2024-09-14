import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVacuumCleanerBold = ({
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
      d="M4.74 15.898c.29-.18.63-.27.98-.27 1.08 0 1.97.89 1.97 1.97 0 .61-.28 1.16-.72 1.52a1.967 1.967 0 0 1-3.22-1.52c0-.73.4-1.37.99-1.7m6.22-1.25a.7.7 0 0 1-.25-.08.75.75 0 0 1-.34-1c.13-.26.43-.39.7-.42.47.01 2 .7 2.66 2.19.17.38 0 .82-.38.99-.1.04-.2.06-.31.06a.74.74 0 0 1-.68-.44c-.37-.82-1.15-1.22-1.4-1.3M21 19.102h-1.078v-.516c.003-.693.017-1.37.032-2.037.087-3.972.17-7.724-2.489-11.404-.44-.612-1.786-2.465-3.649-2.185a2.69 2.69 0 0 0-1.891 1.235 2.64 2.64 0 0 0-.304 2.202c.188.6.536 1.071.844 1.488.303.41.564.765.661 1.185.169.735.028 1.536-.352 2.227-.965-.584-1.967-.998-2.815-1.147-1.631-.294-3.241.111-4.416 1.11-1.018.861-1.621 2.071-1.734 3.446a3.48 3.48 0 0 0-1.559 2.892c0 1.92 1.56 3.47 3.47 3.47.83 0 1.58-.29 2.17-.77q.004-.005.009-.008c1.342.125 2.502.19 3.587.19q.509 0 1.006-.019c1.675-.12 3.055-.985 3.69-2.312.538-1.116.487-2.359-.147-3.595-.46-.896-1.195-1.71-2.035-2.397.615-1.04.85-2.28.588-3.423-.167-.724-.565-1.264-.916-1.739-.261-.354-.507-.687-.619-1.045a1.15 1.15 0 0 1 .138-.952 1.2 1.2 0 0 1 .843-.554c.647-.097 1.389.43 2.214 1.578 2.365 3.273 2.291 6.62 2.206 10.494-.015.676-.029 1.362-.032 2.067v.52h-.547a.75.75 0 0 0 0 1.5h1.244c.018 0 .034.01.053.01s.035-.01.053-.01H21a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVacuumCleanerBold;
