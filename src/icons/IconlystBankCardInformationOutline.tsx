import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardInformationOutline = ({
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
      d="M3.772 5.195c.842-.904 2.04-1.406 3.443-1.406h10.07c1.408 0 2.606.502 3.448 1.407C21.57 6.094 22 7.33 22 8.705v6.587c0 1.376-.43 2.611-1.267 3.51-.843.905-2.04 1.406-3.448 1.406H7.215c-1.407 0-2.604-.501-3.447-1.406-.836-.899-1.266-2.134-1.266-3.51V8.705c0-1.376.432-2.612 1.27-3.51m1.097 1.023c-.536.574-.867 1.422-.867 2.487v6.587c0 1.066.33 1.914.864 2.488.529.567 1.313.928 2.35.928h10.069c1.037 0 1.822-.36 2.35-.928.535-.574.865-1.422.865-2.488V8.705c0-1.066-.33-1.913-.865-2.487-.529-.568-1.313-.929-2.35-.929H7.216c-1.032 0-1.816.36-2.346.929"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.125a.75.75 0 0 1 .75-.75h17.998a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M5.93 15.438a.75.75 0 0 1 .75-.75h3.412a.75.75 0 0 1 0 1.5H6.68a.75.75 0 0 1-.75-.75M5.93 12.715a.75.75 0 0 1 .75-.75h2.534a.75.75 0 0 1 0 1.5H6.68a.75.75 0 0 1-.75-.75M13.817 13.45c0-.96.779-1.74 1.739-1.74h1.275c.96 0 1.739.78 1.739 1.74v1.252c0 .96-.779 1.738-1.739 1.738h-1.275c-.96 0-1.739-.779-1.739-1.739zm1.739-.24a.24.24 0 0 0-.239.24v1.252c0 .131.107.238.239.238h1.275a.24.24 0 0 0 .239-.239V13.45a.24.24 0 0 0-.239-.238z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardInformationOutline;
