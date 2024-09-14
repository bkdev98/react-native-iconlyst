import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp5Outline = ({
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
      d="m13.832 5.66 7.242 13.44c.645 1.197-.222 2.649-1.581 2.649H5.007A1.797 1.797 0 0 1 3.425 19.1l7.243-13.44c.678-1.26 2.485-1.26 3.164 0m-1.321.71a.297.297 0 0 0-.522 0L4.746 19.811a.297.297 0 0 0 .261.438h14.486c.224 0 .367-.24.26-.438z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.034 3.218a.75.75 0 0 1 1.06 0l1.157 1.156 1.156-1.156a.75.75 0 0 1 1.061 1.06l-1.687 1.688a.75.75 0 0 1-1.06 0l-1.687-1.688a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.25A.75.75 0 0 1 13 3v2.435a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M12.25 14.15a.75.75 0 0 1 .66.394l3.289 6.1a.75.75 0 0 1-1.32.712L12.25 16.48l-2.628 4.875a.75.75 0 0 1-1.32-.712l3.287-6.1a.75.75 0 0 1 .66-.394M11.744 10.029a.75.75 0 0 1 1.004 0L14.16 11.3l1.134-1.022a.75.75 0 0 1 1.004 1.114l-1.635 1.474a.75.75 0 0 1-1.004 0l-1.413-1.272-1.413 1.272a.75.75 0 0 1-1.006-.001l-1.626-1.474A.75.75 0 1 1 9.21 10.28l1.124 1.02z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp5Outline;
