import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRulerBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.637 6.046-2.49-2.49a3.58 3.58 0 0 0-4.713-.296.28.28 0 0 0-.019.423c.598.596 2.246 2.242 2.98 2.977a.749.749 0 1 1-1.06 1.06c-.98-.979-2.078-1.919-2.994-2.964a.306.306 0 0 0-.446-.017l-1.34 1.342a.3.3 0 0 0 0 .424q.79.787 1.58 1.575a.749.749 0 1 1-1.06 1.06c-.524-.524-1.027-1.116-1.58-1.614a.29.29 0 0 0-.402.014L7.747 8.887a.3.3 0 0 0 0 .424c.998 1.003 1.984 2.021 2.974 3.033a.75.75 0 0 1-1.07 1.05c-.948-.967-2.094-1.908-2.957-2.968a.31.31 0 0 0-.457-.028L4.894 11.74a.307.307 0 0 0 .017.447c.793.704 1.51 1.538 2.256 2.284a.749.749 0 1 1-1.06 1.06L3.84 13.265a.282.282 0 0 0-.424.02 3.553 3.553 0 0 0 .32 4.68l2.49 2.492a3.57 3.57 0 0 0 2.534 1.048c.918 0 1.835-.35 2.535-1.048l9.341-9.343a3.59 3.59 0 0 0 0-5.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRulerBold;
