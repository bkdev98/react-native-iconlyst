import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudRemoveBold = ({
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
      d="M17.508 8.845a.21.21 0 0 1-.182-.177c-.285-1.832-1.753-4.742-5.324-4.742-3.572 0-5.04 2.91-5.325 4.742a.21.21 0 0 1-.183.177c-2.36.289-3.957 2.098-3.957 4.584a4.64 4.64 0 0 0 2.74 4.222c.775.314 1.553.37 2.37.373a.21.21 0 0 0 .172-.094c.15-.22.331-.407.519-.594a.2.2 0 0 0 0-.283l-.217-.217a2.501 2.501 0 0 1 3.537-3.535l.215.216a.2.2 0 0 0 .283 0l.216-.216a2.501 2.501 0 0 1 3.537 3.535l-.218.217a.2.2 0 0 0 0 .283c.188.187.37.375.519.595a.21.21 0 0 0 .173.093c.815-.004 1.59-.067 2.365-.377a4.64 4.64 0 0 0 2.716-4.218c0-2.486-1.597-4.295-3.956-4.584"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.67 14.538a.75.75 0 0 0-1.06 0l-1.596 1.595-1.595-1.595A.75.75 0 1 0 9.36 15.6l1.595 1.595-1.596 1.595a.752.752 0 0 0 .531 1.281.75.75 0 0 0 .53-.22l1.595-1.595 1.595 1.595a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-1.595-1.596L14.67 15.6a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudRemoveBold;
