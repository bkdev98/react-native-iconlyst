import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthShieldBold = ({
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
      d="M14.947 3.183a3 3 0 0 0-.17-.06l-.132-.046a9.13 9.13 0 0 0-6.992.747 9.13 9.13 0 0 0-4.422 5.48c-.737 2.51-.329 5.25 1.12 7.52 1.44 2.256 3.734 3.77 6.292 4.155a.751.751 0 0 0 .223-1.484c-2.332-.35-.928-2.827-2.05-4.396-1.19-1.664-1.045-2.087-.948-2.368.096-.277.312-.485.588-.748.664-.636 1.575-1.508.976-3.759-.198-.75-.447-1.419-.646-1.956-.15-.404-.255-.63-.139-.879.555-1.187 2.176-1.196 3.43-1.192.734.002 1.235.73.97 1.414-.85 2.196-1.259 4.514-.278 5.652.284.33.753.651 1.501.651.341 0 .74-.067 1.207-.23 2.631-.927 4.041-.684 4.647-.456.014.005.03.003.044.007.05.016.101.02.154.025.048.004.095.01.142.005.015-.002.03.004.045.001.031-.005.055-.024.085-.032a.7.7 0 0 0 .148-.057 1 1 0 0 0 .11-.078.7.7 0 0 0 .108-.102.7.7 0 0 0 .077-.124c.016-.029.04-.05.053-.084.005-.015.002-.03.007-.046.014-.046.017-.092.023-.139.005-.054.011-.106.005-.158 0-.015.004-.028.002-.042-.565-3.416-2.955-6.19-6.18-7.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.423 13.997c-.467 0-2.796.773-3.167 1.15-.309.316-.306.492-.289 1.334.008.357.018.87.018 1.625 0 2.79 3.159 3.778 3.293 3.82a.5.5 0 0 0 .29 0c.134-.042 3.295-1.03 3.295-3.82 0-.75.01-1.263.017-1.62.018-.859.021-1.038-.29-1.339-.367-.376-2.697-1.15-3.167-1.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEarthShieldBold;
