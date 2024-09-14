import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDotBarLineChartOutline = ({
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
      d="M12.5 9.976a.75.75 0 0 1 .75.75v9.39a.75.75 0 0 1-1.5 0v-9.39a.75.75 0 0 1 .75-.75m-7.312 2.817a.75.75 0 0 1 .75.75v6.573a.75.75 0 0 1-1.5 0v-6.573a.75.75 0 0 1 .75-.75m14.624 2.817a.75.75 0 0 1 .75.75v3.756a.75.75 0 1 1-1.5 0V16.36a.75.75 0 0 1 .75-.75M11.574 6.006a.75.75 0 0 1-.428.97L7.038 8.568a.75.75 0 1 1-.542-1.399l4.108-1.591a.75.75 0 0 1 .97.428M13.327 6.238a.75.75 0 0 1 1.051-.139l4.492 3.442a.75.75 0 0 1-.913 1.19L13.466 7.29a.75.75 0 0 1-.14-1.052"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.776 4.085a2.438 2.438 0 1 1 3.448 3.448 2.438 2.438 0 0 1-3.448-3.448m2.388 1.06a.938.938 0 1 0-1.327 1.328.938.938 0 0 0 1.327-1.328M18.088 9.381a2.438 2.438 0 1 1 3.448 3.449 2.438 2.438 0 0 1-3.448-3.449m2.387 1.06a.938.938 0 1 0-1.327 1.328.938.938 0 0 0 1.327-1.327M3.464 6.718a2.438 2.438 0 1 1 3.448 3.448 2.438 2.438 0 0 1-3.448-3.448m2.388 1.06a.938.938 0 1 0-1.327 1.327.938.938 0 0 0 1.327-1.327"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDotBarLineChartOutline;
