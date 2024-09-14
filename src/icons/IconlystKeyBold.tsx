import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyBold = ({
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
      d="m20.181 12.46-3.09-4.11a4.13 4.13 0 0 0-3.31-1.65c-.061 0-.11-.04-.11-.101v-.47q0-.21-.03-.42a3.43 3.43 0 0 0-3.4-3.01 3.416 3.416 0 0 0-3.326 2.678c-.044.197.138.362.339.343q.236-.021.477-.02.183-.001.36.01a.36.36 0 0 0 .357-.242c.269-.734.971-1.269 1.793-1.269 1.004 0 1.814.756 1.906 1.723q.006.047.017.092c.007.039.007.08.007.115v.734a.27.27 0 0 1-.157.247c-.166.077-.197.298-.072.432l.099.107c.33.38.62.8.83 1.25.39.77.6 1.63.6 2.54 0 .7-.13 1.38-.36 2.02-.2.51-.47 1-.8 1.43a4 4 0 0 1-.165.213.31.31 0 0 0-.015.387l1.45 1.93c.8 1.08 2.04 1.65 3.3 1.65.87 0 1.74-.27 2.48-.83 1.82-1.36 2.19-3.95.82-5.78"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.6 12.331c-.59 0-1.07-.48-1.07-1.084 0-.59.48-1.07 1.07-1.07a1.077 1.077 0 1 1 0 2.155M12.08 9.56c-.21-.49-.5-.93-.85-1.31-.11-.12-.23-.24-.35-.35-.25-.23-.53-.43-.83-.59a4.6 4.6 0 0 0-1.72-.57c-.19-.03-.4-.04-.6-.04q-.465 0-.9.09a4.75 4.75 0 0 0-3.84 4.65c0 1.7.914 3.26 2.372 4.103a.31.31 0 0 1 .158.268v3.93c0 1.22.99 2.21 2.21 2.21a2.21 2.21 0 0 0 2.164-1.732c.038-.17-.102-.319-.276-.319H8.541a.61.61 0 0 1-.582-.448.2.2 0 0 1-.008-.065v-.174a.2.2 0 0 1 .008-.065.61.61 0 0 1 .582-.448h1.11a.3.3 0 0 0 .3-.3v-.42a.3.3 0 0 0-.3-.3h-1.11a.61.61 0 0 1-.582-.448.2.2 0 0 1-.008-.065v-.174a.2.2 0 0 1 .008-.065.61.61 0 0 1 .582-.448h1.11a.3.3 0 0 0 .3-.3v-.371c0-.11.06-.21.156-.266a3.6 3.6 0 0 0 .534-.373c.27-.2.51-.43.73-.69.11-.14.22-.28.31-.43.31-.46.54-.99.67-1.54a4.74 4.74 0 0 0-.27-2.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyBold;
