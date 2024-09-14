import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBootstrapOutline = ({
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
      d="M7.725 4.2a3.05 3.05 0 0 0-3.05 3.05c0 .924 0 1.75-.214 2.522-.201.73-.578 1.374-1.211 2.055v.345c.633.68 1.01 1.324 1.211 2.055.213.772.214 1.597.214 2.522a3.05 3.05 0 0 0 3.05 3.05h8.55a3.05 3.05 0 0 0 3.05-3.05c0-.925 0-1.75.214-2.522.201-.731.577-1.374 1.211-2.056v-.344c-.634-.681-1.01-1.325-1.211-2.055-.213-.773-.214-1.598-.214-2.523a3.05 3.05 0 0 0-3.05-3.05zm-4.55 3.05a4.55 4.55 0 0 1 4.55-4.55h8.55a4.55 4.55 0 0 1 4.55 4.55c0 .971.01 1.582.16 2.123.138.501.411.987 1.045 1.62.141.141.22.332.22.531v.95a.75.75 0 0 1-.22.53c-.634.635-.907 1.12-1.045 1.622-.15.54-.16 1.151-.16 2.123a4.55 4.55 0 0 1-4.55 4.55h-8.55a4.55 4.55 0 0 1-4.55-4.55c0-.972-.01-1.583-.16-2.123-.138-.502-.411-.987-1.045-1.621a.75.75 0 0 1-.22-.53v-.95a.75.75 0 0 1 .22-.531c.634-.634.907-1.12 1.045-1.621.15-.54.16-1.152.16-2.124"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.4 8.727c0-.706.572-1.278 1.278-1.278h3.16c1.485 0 2.762 1.147 2.762 2.65 0 .758-.324 1.425-.836 1.9.512.476.836 1.143.836 1.9 0 1.504-1.277 2.65-2.761 2.65h-3.16A1.28 1.28 0 0 1 8.4 15.271zm4.439 2.522c.737 0 1.261-.554 1.261-1.15s-.524-1.15-1.261-1.15H9.9v2.3zM9.9 12.75h2.939c.737 0 1.261.555 1.261 1.15 0 .596-.524 1.15-1.261 1.15H9.9z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBootstrapOutline;
