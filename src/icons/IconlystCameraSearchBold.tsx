import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraSearchBold = ({
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
      d="M17.173 10.9c-.414 0-.75-.306-.75-.72v-.059a.75.75 0 0 1 1.5 0c0 .415-.336.78-.75.78m-1.29 6.576a.749.749 0 0 1-1.061.001l-.975-.974c-.542.33-1.171.53-1.85.53a3.586 3.586 0 0 1-3.582-3.584 3.587 3.587 0 0 1 3.582-3.582 3.587 3.587 0 0 1 3.582 3.582c0 .755-.236 1.453-.635 2.03l.938.936a.75.75 0 0 1 .001 1.06m2.074-10.624a1.38 1.38 0 0 1-.944-.42c-.044-.05-.222-.27-.637-1.049a2.73 2.73 0 0 0-2.411-1.445h-3.912c-.994 0-1.911.54-2.391 1.41-.437.792-.618 1.024-.667 1.079a1.38 1.38 0 0 1-.933.43A3.567 3.567 0 0 0 2.5 10.415v5.642a4.61 4.61 0 0 0 4.606 4.607h9.788a4.61 4.61 0 0 0 4.606-4.608v-5.644c0-1.964-1.598-3.56-3.543-3.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.08 13.45a2.085 2.085 0 0 0-2.083-2.084 2.085 2.085 0 0 0-2.082 2.083c0 1.148.934 2.083 2.082 2.083a2.085 2.085 0 0 0 2.082-2.083"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCameraSearchBold;
