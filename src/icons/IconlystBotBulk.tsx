import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBotBulk = ({
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
      d="M14.93 7.09H9.07c-2.29 0-3.82 1.61-3.82 3.99v3.26c0 2.39 1.53 3.99 3.82 3.99h5.86c2.29 0 3.82-1.6 3.82-3.99v-3.26c0-2.38-1.53-3.99-3.82-3.99"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.75 6.15v.94h-1.5v-.94A1.985 1.985 0 0 1 12 2.33c1.09 0 1.99.89 1.99 1.98 0 .83-.52 1.54-1.24 1.84M12 3.83c.27 0 .49.22.49.48a.49.49 0 0 1-.487.49h-.006a.483.483 0 0 1-.477-.49c0-.26.21-.48.48-.48"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.25 11.9a.74.74 0 0 1-.75-.74v-.01c0-.42.33-.75.75-.75a.749.749 0 1 1 0 1.5M13.38 15.15h-2.76a.749.749 0 1 1 0-1.5h2.76a.749.749 0 1 1 0 1.5M9 11.16v-.01c0-.42.34-.75.75-.75.42 0 .75.33.75.75 0 .41-.33.75-.75.75-.41 0-.75-.33-.75-.74M2.703 11.252a.75.75 0 0 1 1.5 0v2.776a.75.75 0 0 1-1.5 0zM12.002 19.354c1.655 0 3.231.363 4.325.997a.751.751 0 0 1-.752 1.297c-.872-.506-2.174-.794-3.573-.794-1.383 0-2.722.297-3.58.794a.75.75 0 1 1-.752-1.298c1.093-.634 2.672-.997 4.332-.997M20.547 10.502a.75.75 0 0 0-.75.75v2.776a.75.75 0 0 0 1.5 0v-2.776a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default IconlystBotBulk;
