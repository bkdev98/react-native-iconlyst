import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDoubleOutline = ({
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
      d="M17.657 11.39a2.844 2.844 0 0 0-2.844 2.845c0 1.004.609 2.08 1.392 2.962.38.428.773.778 1.093 1.015q.22.161.359.235c.09-.05.212-.127.358-.235.32-.237.713-.587 1.093-1.015.783-.881 1.392-1.958 1.392-2.962a2.844 2.844 0 0 0-2.843-2.844m-4.344 2.845a4.344 4.344 0 0 1 8.687 0c0 1.553-.9 2.977-1.77 3.958a9 9 0 0 1-1.323 1.225c-.203.15-.402.278-.584.373-.146.076-.397.195-.666.195-.27 0-.522-.119-.667-.195a4.6 4.6 0 0 1-.584-.373 9 9 0 0 1-1.323-1.225c-.87-.98-1.77-2.406-1.77-3.958"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 10.647a7.68 7.68 0 0 1 7.682-7.682 7.685 7.685 0 0 1 7.683 7.682.75.75 0 1 1-1.5 0 6.185 6.185 0 0 0-6.182-6.182A6.18 6.18 0 0 0 4 10.647c0 2.193 1.31 4.43 2.86 6.174a15 15 0 0 0 2.216 2.053c.33.244.615.424.836.54.147.076.234.107.27.119l.043-.015c.078-.03.187-.08.327-.16a8 8 0 0 0 1.033-.713c.8-.635 1.738-1.544 2.566-2.623a.75.75 0 0 1 1.19.913 17 17 0 0 1-2.824 2.885 9.7 9.7 0 0 1-1.231.847c-.183.102-.362.19-.532.254-.157.06-.36.12-.572.12-.336 0-.69-.155-.963-.297a8 8 0 0 1-1.034-.663 16.5 16.5 0 0 1-2.446-2.264C4.1 15.973 2.5 13.388 2.5 10.647"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.117 10.588a3.06 3.06 0 1 1 6.122 0 3.06 3.06 0 0 1-6.122 0m3.061-1.56a1.56 1.56 0 1 0 0 3.12 1.56 1.56 0 0 0 0-3.12M16.683 14.089a.94.94 0 1 1 1.88 0 .94.94 0 0 1-1.88 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinDoubleOutline;
