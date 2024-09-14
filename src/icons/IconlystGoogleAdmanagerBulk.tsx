import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdmanagerBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.213 10.182a2.4 2.4 0 0 0 .706-1.712 2.37 2.37 0 0 0-.705-1.687c-.908-.913-2.5-.912-3.405 0l-7.035 7.03a2.4 2.4 0 0 0-.705 1.713c.003.64.254 1.241.705 1.685a2.38 2.38 0 0 0 1.703.708c.644 0 1.249-.25 1.703-.707zM13.285 6.252a2.4 2.4 0 0 0 .703-1.712 2.37 2.37 0 0 0-.703-1.686c-.91-.914-2.5-.914-3.407-.001l-7.032 7.03a2.4 2.4 0 0 0-.001 3.399 2.4 2.4 0 0 0 1.702.708c.643 0 1.249-.252 1.703-.707zM10.715 17.747a2.4 2.4 0 0 0-.703 1.712c.002.642.253 1.241.703 1.686.91.914 2.5.914 3.407.001l7.032-7.03a2.4 2.4 0 0 0 .001-3.399 2.4 2.4 0 0 0-1.702-.708c-.643 0-1.249.252-1.703.707z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.013 14.39c.643 0 1.25-.253 1.703-.709a2.42 2.42 0 0 0-.005-3.412 2.423 2.423 0 0 0-3.399 0l-.003.004a2.417 2.417 0 0 0 0 3.408 2.39 2.39 0 0 0 1.704.708M11.58 6.96c.645 0 1.249-.251 1.704-.708a2.4 2.4 0 0 0 .704-1.712 2.36 2.36 0 0 0-.704-1.686c-.91-.913-2.495-.915-3.405-.002a2.37 2.37 0 0 0-.706 1.688 2.4 2.4 0 0 0 .704 1.712 2.38 2.38 0 0 0 1.703.708M12.42 17.04c-.645 0-1.249.25-1.704.707a2.4 2.4 0 0 0-.704 1.712c.002.642.254 1.242.704 1.686.91.913 2.495.915 3.405.002a2.37 2.37 0 0 0 .706-1.688 2.4 2.4 0 0 0-.704-1.712 2.38 2.38 0 0 0-1.703-.708"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleAdmanagerBulk;
