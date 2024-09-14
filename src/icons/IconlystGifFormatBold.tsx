import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormatBold = ({
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
      d="M19.223 10.56a.75.75 0 0 1-1.06-.037 1.13 1.13 0 0 0-.73-.366c-.306.006-.629.329-.629.725v.88h1.465a.75.75 0 0 1 0 1.5h-1.465v1.47a.75.75 0 0 1-1.5 0v-3.85c0-1.223.996-2.22 2.22-2.22.743.086 1.297.366 1.738.839a.75.75 0 0 1-.039 1.06m-5.196-1.567a.75.75 0 0 1-1.5 0c0-.414.336-.756.75-.756s.75.33.75.745zm0 5.739a.75.75 0 0 1-1.5 0v-3.07a.75.75 0 1 1 1.5 0zm-2.522-1.24c0 1.247-.865 1.99-2.314 1.99a3.2 3.2 0 0 1-2.328-.977c-.654-.68-1.004-1.66-.961-2.683a3.56 3.56 0 0 1 1.152-2.466c.648-.592 1.475-.901 2.312-.853a3.5 3.5 0 0 1 1.37.356.75.75 0 1 1-.659 1.348A2 2 0 0 0 9.289 10a1.74 1.74 0 0 0-1.224.463 2.05 2.05 0 0 0-.664 1.42c-.026.618.173 1.196.545 1.583.322.337.753.515 1.245.515.814 0 .814-.272.814-.49v-.75h-.814a.75.75 0 0 1 0-1.5h1.564a.75.75 0 0 1 .75.75zm7.262-9.82H6.901c-2.731 0-4.567 1.917-4.567 4.77v7.1c0 2.86 1.836 4.78 4.567 4.78h11.865c2.733 0 4.568-1.92 4.568-4.78v-7.1c0-2.853-1.835-4.77-4.567-4.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGifFormatBold;
