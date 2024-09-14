import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentStarBulk = ({
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
      d="M19.854 9.094H16.89c-1.767-.009-3.225-1.472-3.225-3.256v-3.14a.445.445 0 0 0-.443-.448H8.066c-2.404 0-4.354 1.979-4.354 4.397v10.511c0 2.535 2.047 4.592 4.557 4.592h7.675c2.403 0 4.344-1.96 4.344-4.378V9.533a.435.435 0 0 0-.434-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966M13.79 14.568l1.131-1.093a1.023 1.023 0 0 0-.562-1.76l-1.576-.227-.705-1.418-.002-.004a1.037 1.037 0 0 0-1.244-.516 1.01 1.01 0 0 0-.599.52l-.705 1.416-1.607.233c-.198.038-.38.129-.551.285a1.023 1.023 0 0 0 .01 1.463l1.144 1.1-.275 1.563a1.028 1.028 0 0 0 1.495 1.076l1.417-.74 1.413.738a1.033 1.033 0 0 0 1.489-1.084zm-2.634-2.984.387.78c.148.31.44.524.78.573l.867.125-.622.602a1.01 1.01 0 0 0-.298.917l.149.85-.763-.399a1 1 0 0 0-.972-.009l-.79.413.152-.863a1.04 1.04 0 0 0-.3-.911l-.624-.6.875-.127a1.04 1.04 0 0 0 .765-.561z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentStarBulk;
