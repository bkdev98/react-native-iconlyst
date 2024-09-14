import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatYarnLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.644 6.421a7.644 7.644 0 1 1 0 15.289 7.644 7.644 0 0 1 0-15.289"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.04 20.914A10.064 10.064 0 0 0 8.026 6.88"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.27 21.701a7.33 7.33 0 0 0 2.152-5.221A7.41 7.41 0 0 0 5.01 9.068h-.156"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.024 20.8a4.769 4.769 0 0 0-3.756-8.757M17.984 16.208a10.1 10.1 0 0 0-3.458-2.998"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.448 13.337a11.8 11.8 0 0 0-5.13 2.772M9.675 16a6.82 6.82 0 0 0-5.093 2.731M14.006 7.199c-.909.38-1.757.893-2.517 1.52M16.53 9.191A7.36 7.36 0 0 0 13.24 10.7M17.885 11.715a4.75 4.75 0 0 0-3.387 1.414"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.318 9.12c1.945.406 3.994-.617 4.792-1.947.852-1.422-.286-3.538-2.972-2.762-4.077 1.177-4.462-1.483-7.482-1.52-2.34-.028-2.822 2.882-6.163.657"
    />
  </Svg>
);
export default IconlystCatYarnLight;
