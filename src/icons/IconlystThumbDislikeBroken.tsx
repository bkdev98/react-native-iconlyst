import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 8.123V5.752c0-.571 0-.856-.067-1.09a1.75 1.75 0 0 0-1.21-1.21c-.232-.065-.517-.065-1.088-.065-.57 0-.856 0-1.088.066a1.75 1.75 0 0 0-1.21 1.21c-.067.233-.067.518-.067 1.089v7.225c0 .57 0 .856.067 1.089a1.75 1.75 0 0 0 1.21 1.21c.232.066.517.066 1.087.066.572 0 .857 0 1.09-.066a1.75 1.75 0 0 0 1.21-1.21c.066-.233.066-.518.066-1.09V11.76"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.974 3.422c.779.014 1.547.047 2.226.085 1.544.086 2.98.773 4.07 1.869M16.27 14.26c-1.444 1.87-2.878 3.748-4.336 5.608-.462.59-1.27.886-1.996.675-1.62-.47-1.206-3.342-.783-4.864.314-1.13-.067-1.52-.987-1.52-2.01 0-2.965 0-3.65-.413a2.88 2.88 0 0 1-1.285-1.678c-.418-1.464-.274-4.253.44-6.197.485-1.314 1.848-2.217 3.028-2.348"
    />
  </Svg>
);
export default IconlystThumbDislikeBroken;
