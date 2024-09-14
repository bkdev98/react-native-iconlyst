import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunriseOutline = ({
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
      d="M12.562 2.666a.75.75 0 0 1 .75.75v.032a.75.75 0 0 1-1.5 0v-.032a.75.75 0 0 1 .75-.75m6.9 2.831a.75.75 0 0 1 0 1.061l-.045.046a.75.75 0 0 1-1.06-1.061l.045-.046a.75.75 0 0 1 1.06 0m-13.775.026a.75.75 0 0 1 1.06 0l.02.02a.75.75 0 0 1-1.06 1.06l-.02-.02a.75.75 0 0 1 0-1.06m6.872 2.703a4.17 4.17 0 0 0-4.173 4.172.75.75 0 0 1-1.5 0 5.672 5.672 0 0 1 11.345 0 .75.75 0 0 1-1.5 0 4.17 4.17 0 0 0-4.172-4.172m-9.754 4.172a.75.75 0 0 1 .75-.75h.05a.75.75 0 1 1 0 1.5h-.05a.75.75 0 0 1-.75-.75m17.957 0a.75.75 0 0 1 .75-.75h.043a.75.75 0 1 1 0 1.5h-.043a.75.75 0 0 1-.75-.75M13.085 14.183l2.574 2.575a.75.75 0 1 1-1.061 1.06l-1.293-1.294v4.062a.75.75 0 0 1-1.5 0v-4.062l-1.294 1.294a.75.75 0 1 1-1.061-1.06l2.574-2.575m1.06-.002a.75.75 0 0 0-.53-.218zm-.532-.218q-.152 0-.284.057zm-.285.057a.8.8 0 0 0-.241.161z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSunriseOutline;
