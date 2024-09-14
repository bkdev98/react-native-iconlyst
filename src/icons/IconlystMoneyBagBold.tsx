import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyBagBold = ({
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
      d="M17.739 11.125a89 89 0 0 0-1.418-2.265.3.3 0 0 0-.318-.132c-1.328.278-2.664.42-4 .42A19.5 19.5 0 0 1 8 8.728a.3.3 0 0 0-.317.131c-.482.75-.964 1.502-1.421 2.264-1.172 1.943-2.342 4.218-1.377 6.625 1.328 3.31 5.413 3.729 7.122 3.754 1.695-.025 5.78-.442 7.108-3.754.965-2.406-.205-4.682-1.376-6.623M7.804 7.083c.035.066.104.091.177.109 2.62.598 5.276.609 7.897.033a.3.3 0 0 0 .207-.169c.242-.544 1.137-2.56 1.336-3.013a.499.499 0 0 0-.522-.697c-.422.056-1.587.2-1.904.217-1.392.082-2.66-.338-3.726-.758-1.48-.567-2.883-.348-4.18.656-.388.309-.543.443-.543.443a.5.5 0 0 0-.113.614z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyBagBold;
