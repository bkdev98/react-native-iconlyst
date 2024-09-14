import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbDislikeCircleBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M16.371 8.948c0-.212 0-.432-.015-.493-.023.022-.242.022-.454.022-.293 0-.511 0-.573.015.021.024.021.244.021.456v3.86c0 .211 0 .43.015.492.026-.023.244-.023.456-.023h.081c.212 0 .431 0 .492-.015-.023-.024-.023-.243-.023-.455zM13.85 12.808V9.096l-.925-.47c-.125-.063-.18-.094-.24-.116a1 1 0 0 0-.095-.021c-.073-.011-.139-.008-.271-.007H10.01c-.409 0-.703 0-.805.04a.56.56 0 0 0-.238.182c-.067.088-.144.374-.25.769l-.26.965c-.213.789-.365 1.35-.305 1.558a.78.78 0 0 0 .35.458c.187.113.773.113 1.584.113h.572c.136 0 .32 0 .522.114a.96.96 0 0 1 .404.543c.06.223-.002.418-.043.548-.47 1.463-.26 1.998-.186 2.128.043.073.09.108.163.124.044.009.107.005.167.008l.026-.052c.987-1.93 1.668-2.747 2.14-3.097z" />
      <Path d="M17.871 12.808c0 .506 0 .812-.161 1.132-.144.29-.385.531-.678.678-.32.16-.625.16-1.13.16h-.081c-.489 0-.811 0-1.132-.161-.102-.051-.186-.126-.273-.197-.311.382-.783 1.099-1.368 2.242-.104.202-.184.358-.337.505a1.3 1.3 0 0 1-.504.302 1.4 1.4 0 0 1-.471.063 3 3 0 0 1-.517-.038 1.73 1.73 0 0 1-1.158-.837c-.36-.618-.413-1.487-.158-2.59-1.055-.001-1.66-.018-2.174-.327a2.28 2.28 0 0 1-1.019-1.331c-.174-.608-.007-1.227.295-2.35l.264-.977c.167-.622.26-.963.504-1.285.225-.297.526-.526.87-.665.37-.15.725-.15 1.368-.15h2.308c.238 0 .356.004.472.02.122.015.25.046.375.088.121.041.224.09.422.19l.594.301c.141-.182.307-.342.51-.444.318-.159.64-.159 1.129-.159.586 0 .891 0 1.211.16.292.146.532.387.679.68.16.32.16.625.16 1.131zM12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.239 22 12s-4.262-9.5-9.5-9.5" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.71 13.939c.16-.32.16-.626.16-1.132v-3.86c0-.505 0-.81-.16-1.13a1.53 1.53 0 0 0-.678-.68c-.32-.16-.625-.16-1.211-.16-.49 0-.811 0-1.13.159a1.5 1.5 0 0 0-.51.444l-.593-.301a3 3 0 0 0-.422-.19A2 2 0 0 0 12.79 7a3.4 3.4 0 0 0-.472-.02H10.01c-.643 0-.998 0-1.368.15a2.06 2.06 0 0 0-.87.665c-.244.322-.337.663-.504 1.285l-.264.977-.002.005c-.3 1.12-.467 1.737-.293 2.345a2.28 2.28 0 0 0 1.019 1.33c.514.31 1.119.327 2.174.328-.255 1.103-.202 1.972.158 2.59.256.438.667.736 1.158.837.14.028.336.036.517.038.154 0 .303-.006.47-.063.183-.057.367-.17.505-.302.152-.147.232-.302.336-.503v-.002c.586-1.143 1.058-1.86 1.369-2.242l.037.03c.074.062.149.123.236.167.32.16.643.16 1.132.16h.08c.506 0 .81 0 1.13-.16.294-.146.535-.387.679-.677m-1.354-5.485c.015.061.015.281.015.493v3.86c0 .211 0 .43.023.454-.061.015-.28.015-.492.015h-.081c-.212 0-.43 0-.456.023-.015-.062-.015-.28-.015-.493V8.947c0-.212 0-.432-.021-.456.062-.015.28-.015.573-.015.212 0 .43 0 .454-.022m-2.506.64v3.751l.001.037c-.473.35-1.153 1.168-2.14 3.097l-.026.052-.062-.002q-.06.001-.105-.006a.23.23 0 0 1-.163-.124c-.075-.13-.285-.665.185-2.128v-.002c.042-.13.103-.324.043-.546a.96.96 0 0 0-.404-.543c-.2-.114-.386-.114-.52-.114h-.573c-.81 0-1.397 0-1.584-.113a.78.78 0 0 1-.35-.458c-.059-.206.09-.757.298-1.533l.006-.025.261-.965c.106-.395.183-.681.25-.77a.56.56 0 0 1 .238-.18c.102-.041.396-.041.805-.041h2.368c.095-.002.15-.003.212.007a1 1 0 0 1 .095.02c.045.017.088.039.16.075l.08.042z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbDislikeCircleBulk;