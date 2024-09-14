import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPrinterCloseBulk = ({
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
      d="M13.598 17.496c-.03.39-.35.7-.75.7h-1.68c-.4 0-.72-.31-.75-.7v-.05c0-.42.33-.75.75-.75h1.68c.42 0 .75.33.75.75zm4.073.703-1.5-1.5-2.676-2.677h.026l-7.53-7.52q-.004.001-.004.005l-.129-.13-.008.001L3.772 4.3a.75.75 0 1 0-1.06 1.061L4.3 6.95c-1.072.677-1.792 1.855-1.792 3.216v4.01c0 1.99 1.521 3.616 3.463 3.797.113.01.207-.081.207-.195v-2.152a.2.2 0 0 0-.2-.2h-.01c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h5.307l1.5 1.5H7.878a.2.2 0 0 0-.2.2v4.2c0 .85.7 1.55 1.56 1.55h5.54c.86 0 1.55-.7 1.55-1.55v-.847l.963.963h.001l1.383 1.381a.744.744 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.618 11.167h-2.24a.749.749 0 1 1 0-1.5h2.24c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m-9.45-5.88c0-.73.6-1.33 1.33-1.33h5.02c.73 0 1.33.6 1.33 1.33v1.06h-7.68zm9.52 1.06h-.34v-1.06c0-1.56-1.27-2.83-2.83-2.83h-5.02a2.835 2.835 0 0 0-2.811 2.528.2.2 0 0 0 .056.156l1.365 1.366h.01l7.372 7.361a.2.2 0 0 0 .141.059h2.417c.42 0 .75.34.75.75 0 .42-.33.75-.75.75h-.02a.2.2 0 0 0-.2.2v.517a.2.2 0 0 0 .059.141l.411.412v-.02l.97.98h.01a3.83 3.83 0 0 0 2.23-3.48v-4.01a3.82 3.82 0 0 0-3.82-3.82"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPrinterCloseBulk;
