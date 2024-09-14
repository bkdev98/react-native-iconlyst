import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleBold = ({
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
      d="M15.927 20.574h-7.82a.75.75 0 0 0 0 1.5h7.82a.75.75 0 0 0 0-1.5M8.117 9.832a.3.3 0 0 1 .22-.429l6.946-1.166a.3.3 0 0 1 .32.428l-1.533 3.134a.3.3 0 0 0 .27.431h5.696a.3.3 0 0 0 .269-.433l-2.446-4.946-.022-.04-.016-.022-.052-.079c-.03-.04-.07-.07-.1-.1s-.05-.05-.08-.07c-.07-.04-.14-.08-.21-.1a.2.2 0 0 0-.043-.008 1 1 0 0 1-.073-.01.235.235 0 0 0-.154.002.06.06 0 0 1-.04-.001q-.01-.004-.021 0l-3.78.638a.3.3 0 0 1-.35-.296V3.32a.749.749 0 1 0-1.5 0v3.797a.3.3 0 0 1-.25.295l-4.38.738a.75.75 0 0 0-.56.289q-.01.012-.018.027-.02.028-.036.056-.016.022-.025.048l-2.43 4.969a.3.3 0 0 0 .27.431h5.687a.3.3 0 0 0 .27-.432zM10.939 15.665a.28.28 0 0 0-.262-.169H2.938a.28.28 0 0 0-.262.169c-.09.223-.128.453-.003.691a4.41 4.41 0 0 0 3.6 2.39c.12.01.24.01.36.01 1.62 0 3.19-.84 4.25-2.3.19-.258.16-.528.056-.791M21.325 13.889a.28.28 0 0 0-.262-.17h-7.739a.28.28 0 0 0-.262.17c-.09.223-.128.453-.003.69a4.41 4.41 0 0 0 3.96 2.4c1.62 0 3.19-.84 4.25-2.3.19-.257.16-.528.056-.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScaleBold;
