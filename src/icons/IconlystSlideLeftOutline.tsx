import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideLeftOutline = ({
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
      d="M9.983 3.75a.93.93 0 0 0-.93.93v9.64a.75.75 0 0 1-1.368.425l-1.203-1.744a1.09 1.09 0 0 0-1.284-.398c-.537.206-.79.767-.61 1.26.585 1.618 1.514 3.417 2.695 4.886.763.949 2.456 1.505 4.385 1.501 1.918-.004 3.71-.562 4.578-1.43.719-.719 1.317-1.857 1.618-3.14.3-1.28.286-2.625-.13-3.747-.352-.95-1.155-1.456-2.308-1.747-.87-.22-1.808-.287-2.742-.355q-.515-.036-1.026-.082a.75.75 0 0 1-.678-.735l-.067-4.348a.93.93 0 0 0-.93-.916m-2.43.93a2.43 2.43 0 0 1 4.86-.037l.056 3.667.21.015c.966.07 2.104.152 3.113.407 1.375.346 2.75 1.063 3.349 2.68.541 1.46.534 3.116.184 4.61-.35 1.492-1.06 2.901-2.019 3.859-1.272 1.272-3.54 1.865-5.635 1.869-2.086.004-4.362-.576-5.557-2.061-1.303-1.621-2.306-3.573-2.937-5.315-.474-1.309.231-2.691 1.484-3.171a2.59 2.59 0 0 1 2.891.732z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.658 3.528a.75.75 0 0 1 0 1.06l-.722.723.722.722a.75.75 0 1 1-1.06 1.06l-1.253-1.252a.75.75 0 0 1 0-1.06l1.252-1.253a.75.75 0 0 1 1.06 0M18.938 3.528a.75.75 0 0 1 1.061 0l1.253 1.253a.75.75 0 0 1 0 1.06l-1.253 1.253a.75.75 0 0 1-1.06-1.06l.722-.723-.723-.722a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.125 5.313a.75.75 0 0 1 .75-.75h5.845a.75.75 0 0 1 0 1.5h-5.845a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlideLeftOutline;
